![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ember Lesson

## Lesson Details
### Foundations
At this point, students have already learned how to:

- Create a new Template using `ember g`.
- Configure the Ember Router to point to a new Template.
- Use the `{{#link-to}}` helper to link from one Template to another Template.
- Create nested Views and route to them appropriately.
- Set up an 'index' Template.

### Objectives
By the end of this lesson, students should be able to:

- Set up resource routes.
- Create a Route object.
- Configure a Route to parse information from a URL.

## Routing to Resources
In the previous lesson on Ember routing, you learned how to generate templates and connect to them via the Router.

Routes linking to (basically) static HTML are well and good, but most of the time we're interested in showing and manipulating data from resources (e.g. products). Although the routes for resources used to be distinct from normal routes, in Ember 2 that distinction has disappeared - now, a route for a resource (such as 'products') looks like any other route.

```javascript
Router.map(function() {
  this.route('products');

  this.route('about');
  this.route('contact');
  this.route('team', function(){
    this.route('leadership');
    this.route('engineering');
    this.route('sales');
  });
});
```

**However**, in order for such a route to actually have data to load, we need to create a Route object. As you may recall from the Ember Overview lesson, the purposes of the Route object are (1) to parse the URL for a given route, and (2) to use information from that URL to load model data.

Generating this Route object is fairly easy. In the case of a 'products' route, we can do this by running the command `ember g route products`; this will create _two_ new files in the `app/products` directory, a Route file and a Template file.

Let's take a closer look at that Route file.
```javascript
import Ember from 'ember';

export default Ember.Route.extend({
});
```

The way in which a Route file makes data available to a Controller, View, or Template is through a method that we define called `model` - this method returns some data object that gets used within the route. In this case, let us suppose that the `model` method returns an array of JavaScript objects, like so:
```javascript
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Crock Pot',
        manufacturer: 'Farberware',
        price: 40
      },
      {
        id: 2,
        name: 'Food Processor',
        manufacturer: 'Cuisinart',
        price: 25
      },
      {
        id: 3,
        name: 'Electric Griddle',
        manufacturer: 'George Foreman Grills',
        price: 15
      },
    ];
  }
});
```

If we wanted to access this data from a Template, we can do so by referencing a property called `model` from within the Template, which points back to the result of the model function from the Route. Let's make a change to the 'products' Template so that it shows the names of the products listed above.

```html
<!-- {{outlet}} -->
<h2> Product Listings </h2>
<ul>
{{#each model as |product|}}
  <li>{{product.name}}</li>
{{/each}}
</ul>
```

> `{{#each set as |item|}}` is a new construction for Ember 2. The pipes (`|`) play the same role here that they do in Ruby.

<!--
### YOUR TURN : Routing to Resources
-->

## Routing with Dynamic Segments
Often, we don't just want to see the full list of a particular type of resource - we want to be able to zoom in on one in particular. Although it deals with the same type of resource, because it creates a different 'view state' than looking at the list as a whole, _this must be represented with a separate route_. Let's call this new route 'product', since it concerns zooming in on one product in particular from the list.

```javascript
Router.map(function() {
  this.route('products');
  this.route('product', {path: '/products/:product_id'})

  this.route('about');
  this.route('contact');
  this.route('team', function(){
    this.route('leadership');
    this.route('engineering');
    this.route('sales');
  });
});
```

The object passed in as the second argument to the 'product' route contains the actual path used to reach the 'product' route. It's usually not necessary to specify the actual `path`, since the URL and the name of the route are usually the same; however, in this case, they are _not_ the same, so we _must_ specify the `path` explicitly.

The `:product_id` section of the `path` is called a dynamic segment; much like you've seen in Rails and Express, this part of the URL is a placeholder for a value, typically a number. The name `:product_id` is not special, and in fact we could have chosen any name for that segment.

As mentioned earlier, one of the two big responsibilities of the Route is to parse the URL and extract meaningful information - dynamic segments are the primary instance of this. Let's create a new Route for 'product' (`ember g route product`) and see if we can get that configured.

```javascript
import Ember from 'ember';

export default Ember.Route.extend({
});
```

We still need a model for our Template; however, this time, rather than returning all products, we want to only return one, based on the value passed in as `:product_id`. As it turns out, though we usually ignore it, the `model` function normally accepts an object as an argument (typically called `params`) which holds data from that route's dynamic segment; if we extract that property from `params` (`:product_id` is stored at `params.product_id`), we can use it to look up the data we want.

```javascript
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return [
      {
        id: 1,
        name: 'Crock Pot',
        manufacturer: 'Farberware',
        price: 40
      },
      {
        id: 2,
        name: 'Food Processor',
        manufacturer: 'Cuisinart',
        price: 25
      },
      {
        id: 3,
        name: 'Electric Griddle',
        manufacturer: 'George Foreman Grills',
        price: 15
      },
    ][params.product_id - 1];
  }
});
```

Since our Route has a `model` method, we can now access the data from that method in the Route's corresponding Template.

```html
<!-- {{outlet}} -->

<h2> Product Details </h2>
<h4>{{model.name}}</h4>
<h5>${{model.price}}</h5>
<p>Manufactured by <em>{{model.manufacturer}}</em></p>
{{#link-to 'products'}}Back to Product Listings{{/link-to}}
```

Now if we navigate to `http://localhost:4200/products/3`, we can now see information about the third product on our page.

Since this now works, let's make one final change: replacing the hard-coded HTML in the 'products' template with `{{#link-to}}` helpers pointing to the specific pages for each product.

```html
<!-- {{outlet}} -->

<h2> Product Listings </h2>
<ul>
{{#each model as |product|}}
  {{#link-to 'product' product tagName='li'}}{{product.name}}{{/link-to}}
{{/each}}
</ul>
```

<!--
### YOUR TURN : Routing with Dynamic Segments
-->

## Additional Resources
- [Ember Guides - Routing](http://guides.emberjs.com/v2.2.0/routing/)

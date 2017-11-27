var router = new VueRouter({
  props:["pathone"],
  routes: [
    {
      path:"/:pathone",
      component: Pets,
      props: true,
      name: "pets",
      children:[
      {
        path:"/:pathone/dog",
        component: Dog,
        props: true,
        name: "dog",
      },
      {
        path:"/:pathone/cat",
        component: Cat,
        props: true,
        name: "cat",
      },
      {
        path:"/:pathone/monkey",
        component: Monkey,
        props: true,
        name: "monkey",
      }
    ]
  }
]
})

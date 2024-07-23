const routes = [
  {
    path: "/app/page1",
    text: "Page 1",
  },
  {
    path: "/app/page2",
    text: "Page 2",
  },
  // {
  //   text: "Parent 1",
  //   child: [
  //     {
  //       path: "/page1",
  //       text: "Page P1C1",
  //     },
  //     {
  //       path: "/page2",
  //       text: "Page P1C2",
  //     },
  //     {
  //       path: "/page1",
  //       text: "Page P1C3",
  //     },
  //   ],
  // },
  {
    path: "/page3",
    text: "Page 3",
  },
  {
    // path: "customer",
    text: "Customer",
    child: [
      { path: "customer/list", text: "List Customers" },
      { path: "customer/new", text: "Add Customer" },
    ],
  },
];

export default routes;

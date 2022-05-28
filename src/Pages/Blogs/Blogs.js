import React from "react"

const Blogs = () => {
  return (
    <div className="m-20">
      <h2 className="my-2 text-lg">
        How will you improve the performance of a React Application?
      </h2>
      <p className="my-2">
        There are several ways the performance of a react application can be
        improved. first of all, reducing application size, for example not
        including any backend file to frontend and not to kepp all the asset at
        client site. secondly, avoiding too much re rendering. this can slows
        down application gradually. another one is lazy loading the components.
        lazy loading is kind of process where all the components arent loads at
        same time
      </p>

      <h2 className="my-2 text-lg">
        What are the different ways to manage a state in a React application?
      </h2>
      <p className="my-2">
        The basic and simple way to manage state in a react application is to
        use react built in hooks like , usestate, context api. There are some
        thirdparty popular library that was make to manage the state of a react
        application. for example, recoil, redux, hookstate. Redux is the most
        popular one.
      </p>
      <h2 className="my-2 text-lg">
        Why you do not set the state directly in React. For example, if you have
        const [products, setProducts] = useState([]). Why you do not set
        products = [...] instead, you use the setProducts
      </h2>
      <p className="my-2">
        We can not set the state directly because immutabilty of functional
        component. if we update directly it does not change the state
        immediately, rathter if creates a pending state, and accessing it after
        calling this method will only return the present value.
      </p>
      <h2 className="my-2 text-lg">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h2>
      <p className="my-2">
        Using array.find function. product.find ((prod)={">"} prod.name ===
        "name")
      </p>
      <h2 className="my-2 text-lg">
        What is a unit test? Why should write unit tests?
      </h2>
      <p className="my-2">
        Unit testing is a way of testing a software while developing. A small
        piece of code is being tested by the developer to check if the code is
        working properly. this small piece of code is called unit. The smaller
        the code testing will be more efficient. unit testing make esier to
        change the code in future if we need to bring change to the software.
        unit testing also improves the quality of the code.
      </p>
    </div>
  )
}

export default Blogs

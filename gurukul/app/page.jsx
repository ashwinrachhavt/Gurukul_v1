//import Login from "@components/Login";
//import ProblemsTable from "@components/ProblemsTable";
"use client"
import { Sandpack } from '@codesandbox/sandpack-react';
//import { nightOwl } from "@codesandbox/sandpack-themes";
import ProblemsTable from "@components/ProblemsTable";
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Gurukul
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      An AI powered learning assistant Code Mentor for students to learn code.
    </p>
    {/* <Login /> */}
    *<ProblemsTable />
  </section>
);

export default Home;
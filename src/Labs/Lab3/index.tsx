import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import AddingAndRemovingToFromArrays from "./AddingAndRemoveToFromArray";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ForLoops from "./ForLoop";
import ImpliedReturn from "./ImpliedReturn";
import MapFunction from "./MapFunction";
import LegacyFunctions from "./LegacyFunctions";
import SimpleArrays from "./SimpleArray";
import TemplateLiterals from "./TemplateLiterals";
import { TernaryOperator } from "./TernaryOperator";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import Classes from "./Classes";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterDunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import JsonStringify from "./JsonStringfy";
import PathParameters from "./PathParameters";
import Spreading from "./Spreading";
import Styles from "./Styles";
import VariableTypes from "./VariableTypes";
import { UseSelector, useSelector } from "react-redux";

export default function Lab3() {
  const { todos } = useSelector((state:any)=>state.todosReducer);
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />


      <VariablesAndConstants />
      <BooleanVariables />
      <IfElse />
      <AddingAndRemovingToFromArrays />
      <ArrayIndexAndLength />
      <ArrowFunctions />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <ForLoops />
      <ImpliedReturn />
      <JsonStringify />
      <MapFunction />
      <LegacyFunctions />
      <SimpleArrays />
      <TemplateLiterals />
      <TernaryOperator />
      <Classes />
      <Destructing />
      <DestructingImports />
      <FilterFunction />
      <FindFunction />
      <FindIndex />
      <FunctionDestructing />
      <House />
      <PathParameters />
      <Spreading />
      <Styles />
      <VariableTypes />

      <h3>JavaScript</h3>

      <Add a={3} b={4} />
      <h4> Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
    </div>
  );
}

export {};

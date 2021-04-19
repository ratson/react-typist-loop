import React from "react";
import renderer from "react-test-renderer";
import Typist from "react-typist";
import TypistLoop from "../src/TypistLoop";

test("renders correctly", () => {
  const App: React.FC = () => (
    <TypistLoop interval={3000}>
      {["Hello World", "Good Morning", "Bye"].map((text) => (
        <Typist key={text} startDelay={1000}>
          {text}
        </Typist>
      ))}
    </TypistLoop>
  );
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

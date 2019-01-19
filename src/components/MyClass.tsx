import * as React from "react";

export interface IProps {
  name?: string;
  isMarried: boolean;
}
export interface IState {
  age: number;
}

class MyClass extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    name: "Rui"
  };

  public state = {
    age: 26
  };

  public render() {
    return (
      <div>
        <h1>
          My name is {this.props.name} and I am {this.state.age}
        </h1>
      </div>
    );
  }
}

export default MyClass;

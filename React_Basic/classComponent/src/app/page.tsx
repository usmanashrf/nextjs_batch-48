"use client";

class Page extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount(): void {
    console.log("ComponentDidMount");
  }
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    if (this.state.count < 10) {
      return true;
    }
    return false;
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    console.log("Render");
    return (
      <div>
        Main {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
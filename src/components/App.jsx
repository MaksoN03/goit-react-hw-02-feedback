import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Section } from "./Feedback/Section";
import { Statistics } from "./Feedback/Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Layout";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = options => {
    this.setState(prevState => {
      const value = prevState[options];
      return {
        [options]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number((good * 100) / total).toFixed(0) : '';
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </Container>
    );
  };
};

export default App;
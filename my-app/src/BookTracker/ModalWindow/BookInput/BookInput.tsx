import * as React from "react";
import { Form } from "../../../base-components/Form";

class BookInput extends React.Component<{
  error?: string;
  name: string;
  value: string;
  showError?: boolean;
  label: string;
  placeholder: string;
  onBlur?: <T>(event?: React.FocusEvent<T>) => void;
  onChange: <T>(event: React.ChangeEvent<T> | any) => void;
}> {
  state = {
    active: false
  };

  onBlur = () => {
    this.setState({ active: false });
  };

  onFocus = () => {
    this.setState({ active: true });
  };

  render() {
    return (
      <Form
        active={this.state.active}
        error={this.props.error}
        label={this.props.label}
        name={this.props.name}
        onBlur={this.props.onBlur || this.onBlur}
        onChange={this.props.onChange}
        onFocus={this.onFocus}
        placeholder={this.props.placeholder}
        showError={this.props.showError}
        value={this.props.value}
      />
    );
  }
};

export {BookInput};

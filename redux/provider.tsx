"use client";
import { store } from "./store";
import { Provider } from "react-redux";
type Props = {
  children: React.ReactNode;
};
export default function ReduxProvider(props: Props) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}

"use client";

export default function PageWrapper(props) {
  return <div>{props.children(props)}</div>;
}

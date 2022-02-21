import React from "react";
import Grid from "./Grid";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
      noOfChildren: { type: 'number', defaultValue: 4 }
  },
};

const Template = ({noOfChildren, ...args}) => (
    <Grid {...args}>
        { [...Array(noOfChildren).keys()].map(n => <div style={{backgroundColor: "#efdeef", padding: '10px'}}>{n+1}</div>) }
    </Grid>
);

export const FourChildren = Template.bind({});
FourChildren.args = {
  noOfChildren: 4,
  containerClass: "test-container",
};


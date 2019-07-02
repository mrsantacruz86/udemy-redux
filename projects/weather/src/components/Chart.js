import _ from "lodash";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

const average = d => {
  return _.round(_.sum(d) / d.length);
};

export default props => {
  const { color, data, units } = props;
  return (
    <div>
      <Sparklines height={120} width={120} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </div>
  );
};

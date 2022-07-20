import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CreateIcon = (props) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    fill={props.colors}
  >
    <Path d="M9 15h3.81l8.7-8.69a2.7 2.7 0 0 0 0-3.82 2.77 2.77 0 0 0-3.82 0L9 11.19Zm2-3 8.11-8.1a.69.69 0 0 1 1 0 .68.68 0 0 1 0 1L12 13h-1Z" />
    <Path d="M20 19.07a.93.93 0 0 1-.93.93H4.93a.93.93 0 0 1-.93-.93V4.93A.93.93 0 0 1 4.93 4H15V2H4.93A2.93 2.93 0 0 0 2 4.93v14.14A2.93 2.93 0 0 0 4.93 22h14.14A2.93 2.93 0 0 0 22 19.07V10h-2Z" />
  </Svg>
)

export default CreateIcon

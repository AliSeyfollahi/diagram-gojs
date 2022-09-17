import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useSelector } from 'react-redux'

const LinkSelect = ({ name = "from" }) => {

  const diagram = useSelector((state) => state.diagram)

  return <FormControl fullWidth>

    <NativeSelect
      defaultValue={30}
      inputProps={{
        name: name,
        id: 'uncontrolled-native',
        required: true
      }}
    >
      {diagram.nodeDataArray.map((item) => {
        return <option key={item.key} value={item.key}>{item.text}</option>
      })}
    </NativeSelect>
  </FormControl>
}

export default LinkSelect
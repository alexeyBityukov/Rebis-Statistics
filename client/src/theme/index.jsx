import { createMuiTheme } from '@material-ui/core/styles';
import {
  red,
  blue,
} from '@material-ui/core/colors';


export default createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
  spacing: 10,
  typography: {
    useNextVariants: true,
  },
});

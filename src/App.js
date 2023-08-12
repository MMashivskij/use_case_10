import logo from './logo.svg';
import './App.css';

import { regexChecker } from './utils/regex'; 

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Argument (string, min, max)</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Too short input</td>
            <td>1234, 5, 10</td>
            <td>{regexChecker('1234', 5, 10)}</td>
          </tr>
          <tr>
            <td>Too long input</td>
            <td>12345678901, 5, 10</td>
            <td>{regexChecker('12345678901', 5, 10)}</td>
          </tr>
          <tr>
            <td>Matching input length</td>
            <td>1aA@rrqq, 5, 10</td>
            <td>{regexChecker('1aA@rrqq', 5, 10)}</td>
          </tr>
          <tr>
            <td>Missing uppercase</td>
            <td>1a@rrqq, 5, 10</td>
            <td>{regexChecker('1a@rrqq', 5, 10)}</td>
         </tr>
          <tr>
            <td>Missing lowercase</td>
            <td>1@RRQQ, 5, 10</td>
            <td>{regexChecker('1@RRQQ', 5, 10)}</td>
          </tr>
          <tr>
            <td>Missing special character</td>
            <td>122RRQQ, 5, 10</td>
            <td>{regexChecker('122RRQQ', 5, 10)}</td>
          </tr>
          <tr>
            <td>Missing digit</td>
            <td>qwe$RQQ, 5, 10</td>
            <td>{regexChecker('qwe$RQQ', 5, 10)}</td>
          </tr>
          <tr>
            <td>Excess whitespace characters in various positions</td>
            <td>q w e $ R Q Q, 5, 10</td>
            <td>{regexChecker('q w e $ R Q Q', 5, 10)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

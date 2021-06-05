import _ from 'lodash';
// import faker from 'faker';
import React from 'react';
import { Table, Search, Grid, Header, Segment, Label } from 'semantic-ui-react';
import Nav from '../components/UserNav';

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }));

const initialState = {
  loading: false,
  results: [],
  value: '',
};

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState;
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query };
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results };
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const resultRenderer = ({ title }) => <Label content={title} />;

function SearchContent() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  
  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          resultRenderer={resultRenderer}
          results={results}
          value={value}
        />
      </Grid.Column>

      <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: 'auto' }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default SearchContent;

// import _ from "lodash";
// import faker from "faker";
// import React, { useEffect, useState } from "react";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";
// import axios from "axios";

// const source = _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$")
// }));

// const initialState = {
//   loading: false,
//   results: [],
//   value: ""
// };

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case "CLEAN_QUERY":
//       return initialState;
//     case "START_SEARCH":
//       return { ...state, loading: true, value: action.query };
//     case "FINISH_SEARCH":
//       return { ...state, loading: false, results: action.results };
//     case "UPDATE_SELECTION":
//       return { ...state, value: action.selection };

//     default:
//       throw new Error();
//   }
// }

// function SearchExampleStandard() {
//   const [state, dispatch] = React.useReducer(exampleReducer, initialState);
//   const { loading, results, value } = state;

//   const timeoutRef = React.useRef();
//   const handleSearchChange = React.useCallback((e, data) => {
//     clearTimeout(timeoutRef.current);
//     dispatch({ type: "START_SEARCH", query: data.value });

//     timeoutRef.current = setTimeout(() => {
//       if (data.value.length === 0) {
//         dispatch({ type: "CLEAN_QUERY" });
//         return;
//       }

//       const re = new RegExp(_.escapeRegExp(data.value), "i");
//       const isMatch = (result) => re.test(result.title);

//       dispatch({
//         type: "FINISH_SEARCH",
//         results: _.filter(source, isMatch)
//       });
//     }, 300);
//   }, []);

//   React.useEffect(() => {
//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, []);
//   console.log(state.value);
//   let symbol = state.value;
//   console.log(symbol + " from line 69");
//   const url = `https://api.polygon.io/v1/meta/symbols/${symbol}/news?perpage=50&page=1&apiKey=Tsr7xsK4s1VfxyjLgceQjG9IwsIpphMp`;
//   console.log("line 71 " + url);
//   const [news, setNews] = useState(null);

//   let content = null;

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setNews(response.data);
//       console.log(response.data);
//     });
//   }, [url]);

//   if (news) {
//     console.log(news[0].image + " line 23");
//     content = (
//       <div>
//         <div>
//           <h1>DATE IS {news[0].timestamp}</h1>
//           <h1>TITLE IS {news[0].title}</h1>
//           <h1>URL IS {news[0].url}</h1>
//           <h1>SUMMARY IS {news[0].summary}</h1>
//         </div>
//         <div>
//           <h1>DATE IS {news[1].timestamp}</h1>
//           <h1>TITLE IS {news[1].title}</h1>
//           <h1>URL IS {news[1].url}</h1>
//           <h1>SUMMARY IS {news[1].summary}</h1>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       {content}
//       <Grid>
//         <Grid.Column width={6}>
//           <Search
//             loading={loading}
//             onResultSelect={(e, data) =>
//               dispatch({
//                 type: "UPDATE_SELECTION",
//                 selection: data.result.title
//               })
//             }
//             onSearchChange={handleSearchChange}
//             results={results}
//             value={value}
//           />
//         </Grid.Column>

//         <Grid.Column width={10}>
//           <Segment>
//             <Header>State</Header>
//             <pre style={{ overflowX: "auto" }}>
//               {JSON.stringify({ loading, results, value }, null, 2)}
//             </pre>
//             <Header>Options</Header>
//             <pre style={{ overflowX: "auto" }}>
//               {JSON.stringify(source, null, 2)}
//             </pre>
//           </Segment>
//         </Grid.Column>
//       </Grid>
//     </div>
//   );
// }

// export default SearchExampleStandard;
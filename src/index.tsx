import * as React from 'react';
import ReactPDF, {Document, Page, Text, View, StyleSheet} from "@react-pdf/renderer";
import {useEffect} from "react";

const Example = () => {
  useEffect(() => console.log("breaks")); // This line breaks it

  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #3</Text>
          <Text>Section #3</Text>
          <Text>Section #3</Text>
        </View>
      </Page>
    </Document>
  );
};

// noinspection JSIgnoredPromiseFromCall
ReactPDF.render(<Example />, `${__dirname}/output.pdf`);
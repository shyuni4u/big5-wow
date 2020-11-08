import App from 'next/app';
import Head from 'next/head';
import React from 'react';

const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: '#fff',
    backgroundColor: '#000',
    // position: 'absolute',
    // bottom: '0',
    fontSize: '12px'
  }
};

export default class RootApp extends App {
  render() {
    const { Component, other } = this.props;
    return (
      <>
        <Head>
          <title>WoW - Big 5 TEST</title>
          {/* <Head>
            <title>WoW - Big 5 TEST</title>
            <script dangerouslySetInnerHTML={{ __html: `<!--googleoff: all-->` }} />
            <noscript>Sorry. My page needs script.</noscript>
          </Head> */}
        </Head>
        <div style={styles.layout}>
          {/* <header style={styles.header}>Header</header> */}
          <main style={styles.main}>
            <Component {...other} />
          </main>
          <footer style={styles.footer}>Copyright 2020 shyuniz Authors.</footer>
        </div>
      </>
    );
  }
}

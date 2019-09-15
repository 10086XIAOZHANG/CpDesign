import * as React from 'react';

const Index: React.SFC = (): JSX.Element => {
  return (
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          marginTop: '2rem',
          fontSize: '1.17rem',
          fontFamily: 'MicrosoftYaHei',
          color: 'rgba(154,154,154,1)',
          lineHeight: '1.58rem'
        }}
      >
        抱歉，您访问的页面走丢了~
      </p>
    </div>
  );
};

export default Index;

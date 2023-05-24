import React, { useEffect, useState } from 'react'
import { Document, Page, PDFViewer, PDFDownloadLink, renderToStream } from '@react-pdf/renderer'
import dynamic from 'next/dynamic';
import Template from './Template';

interface Props {
  profile: any
}

const Preview: React.FC<Props> = ({ profile }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '95%',
        }}
      >
        <Template profile={profile} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Template profile={profile} />}
        fileName={`${profile.name}.pdf`}
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
};

export default Preview;
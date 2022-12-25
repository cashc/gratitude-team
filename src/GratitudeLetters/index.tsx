import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import styled from '../styled';
import { Page, H2, Link } from '../ui';
import jsonData from './data';

const GatheringsHeader = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Letters: React.FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setData(jsonData);
  }

  if (!data) {
    return null;
  }

  return (
    <Page>
      <GatheringsHeader>
        <div>
          <H2>Gratitude Letters</H2>
        </div>
      </GatheringsHeader>
      {Object.keys(data).map((d) => (
        <p>
          <Link to={d}>{d}</Link>
        </p>
      ))}
    </Page>
  );
};

export const Letter: React.FC = () => {
  const [data, setData] = useState<any>();

  const id = useParams().id || '';

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setData(jsonData);
  }

  if (!data) {
    return null;
  }

  return (
    <Page>
      <GatheringsHeader>
        <div>
          <H2>{id}</H2>
        </div>
      </GatheringsHeader>
      <ReactMarkdown
        children={data[id] || 'invalid key'}
        remarkPlugins={[remarkGfm]}
      />
    </Page>
  );
};

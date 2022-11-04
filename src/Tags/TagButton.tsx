import React from 'react';
import styled from '../styled';
import { Tag } from '../types';
import { Text } from '../ui';

interface Props {
  tag: Tag;
}

const TagElement = styled(Text)`
  background-color: ${(t) => t.theme.backgroundLight};
  border-color: ${(t) => t.theme.border};
  box-shadow: ${(t) => t.theme.shadow};
  border-radius: 70px;

  margin: 8px 0 8px 10px;
  padding: 5px 15px;

  min-width: fit-content;
  max-width: 180px;
  text-overflow: ellipsis;
`;

export const TagButton: React.FC<Props> = ({ tag }) => {
  const { name } = tag;
  return <TagElement>{name}</TagElement>;
};

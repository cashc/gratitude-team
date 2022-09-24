import React from 'react';
import styled from '../styled';
import { Tag } from '../types';
import { Text } from '../ui';

interface Props {
  tag: Tag;
}

const TagElement = styled(Text)`
  border-color: ${(t) => t.theme.border};
  background-image: linear-gradient(${(t) => t.theme.primaryGradient});
  box-shadow: ${(t) => t.theme.shadow};
  border-radius: 70px;

  margin: 10px 15px;
  padding: 5px 15px;

  min-width: fit-content;
  max-width: 180px;
  text-overflow: ellipsis;
`;

export const TagButton: React.FC<Props> = ({ tag }) => {
  const { name } = tag;
  return <TagElement>{name}</TagElement>;
};

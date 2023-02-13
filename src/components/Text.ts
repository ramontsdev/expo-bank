import styled from 'styled-components/native';

interface TextProps {
  weight?: 'normal' | 'bold' | 'black';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme, weight }) => weight
    ? theme.fonts.primary.weight[weight]
    : theme.fonts.primary.weight.normal
  };
  color: ${({ color }) => color || '#333'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;

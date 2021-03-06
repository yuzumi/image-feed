import { FunctionComponent, useState, memo } from 'react';
import { View, Image, ImageSourcePropType, ActivityIndicator } from 'react-native';

import AuthorRow from 'src/components/AuthorRow';

import styles from './Card.styles';

export interface CardProps {
  fullName: string;
  image: ImageSourcePropType;
  linkText?: string;
  onPressLinkText?: () => void;
}

const areCardPropsEqual = (prevProps: CardProps, nextProps: CardProps) => {
  return prevProps.linkText === nextProps.linkText;
};

export const Card: FunctionComponent<CardProps> = memo(({
  fullName,
  image,
  linkText,
  onPressLinkText,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  }

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.imageContainer}>
        {isLoading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
          />
        )}
        <Image
          style={styles.image}
          source={image}
          onLoad={handleImageLoad}
        />
      </View>
    </View>
  );
}, areCardPropsEqual);

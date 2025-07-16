import { type ReactNode } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

import type {
   StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

// Define type for rotation degrees
type RotationDegrees = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

// Define props for the BorderBox component
interface BorderBoxProps {
  icon: ImageSourcePropType;
  iconWidth?: number;
  iconHeight?: number;
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  horizontalPadding?: number;
  verticalPadding?: number;
  rotationDegrees?: RotationDegrees;
}

const BorderBox = ({
  icon,
  iconWidth = 14,
  iconHeight = 16,
  containerStyle = {},
  children,
  horizontalPadding = 100,
  verticalPadding = 800,
  rotationDegrees = {
    top: '0deg',
    bottom: '180deg',
    left: '-90deg',
    right: '90deg',
  },
}: BorderBoxProps) => {
  const screenWidth = Dimensions.get('window').width - horizontalPadding;
  const screenHeight = Dimensions.get('window').height - verticalPadding;

  const horizontalCount = Math.floor(screenWidth / iconWidth);
  const verticalCount = Math.floor(screenHeight / iconHeight);

  const renderIconsRow = (angle: string = '0deg') =>
    Array.from({ length: horizontalCount }).map((_, index) => (
      <Image
        key={index}
        style={{
          height: iconHeight,
          width: iconWidth,
          transform: [{ rotate: angle }],
        }}
        source={icon}
        resizeMode="contain"
      />
    ));

  const renderIconsColumn = (angle: string = '90deg') =>
    Array.from({ length: verticalCount }).map((_, index) => (
      <Image
        key={index}
        style={{
          height: iconHeight,
          width: iconWidth,
          transform: [{ rotate: angle }],
        }}
        source={icon}
        resizeMode="contain"
      />
    ));

  return (
    <>
      <View
        style={[
          styles.container,
          { height: screenHeight, width: screenWidth },
          containerStyle,
        ]}
      >
        {/* Top Border */}
        <View style={{ flexDirection: 'row', width: screenWidth }}>
          {renderIconsRow(rotationDegrees.top || '0deg')}
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: screenWidth,
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          {/* Left Border */}
          <View>{renderIconsColumn(rotationDegrees.left || '-90deg')}</View>

          {/* Content */}
          <View style={[styles.content, { flex: 1 }]}>{children}</View>

          {/* Right Border */}
          <View>{renderIconsColumn(rotationDegrees.right || '90deg')}</View>
        </View>
      </View>

      {/* Bottom Border */}
      <View style={{ flexDirection: 'row', width: screenWidth }}>
        {renderIconsRow(rotationDegrees.bottom || '180deg')}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BorderBox;

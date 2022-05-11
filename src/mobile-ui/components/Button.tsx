import { Button as ReactNativeButton } from 'react-native';

export default ({ onPress, title }) => (
    <ReactNativeButton onPress={onPress} title={title} />
)
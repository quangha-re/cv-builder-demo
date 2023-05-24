import styles from './styles'
import { View, Text } from '@react-pdf/renderer';

interface Props {
  about: any;
}

const RightSection: React.FC<Props> = ({ about }) => {
  return (
    <View style={styles.section_right}>
      <Text>{about}</Text>
    </View>
  )
}

export default RightSection;
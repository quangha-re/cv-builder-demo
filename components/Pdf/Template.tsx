import { Document, Page } from "@react-pdf/renderer"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import styles from "./styles";

interface Props {
  profile: any
}

const Template: React.FC<Props> = ({ profile }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <LeftSection profile={profile} />
        <RightSection about={profile.about} />
      </Page>
    </Document>
  )
}

export default Template
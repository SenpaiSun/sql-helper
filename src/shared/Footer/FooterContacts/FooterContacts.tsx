import { contacts } from "@entities/constants/constants"
import { Flex, List } from "antd"

export const FooterContacts: React.FC = () => {
  return (
    <List
      dataSource={contacts}
      renderItem={(item) => (
        <List.Item styles={{ display: 'flex', justifyContent: 'end' }}>
          {item.name === 'Email' ? (
            <Flex align='end' justify='end'>
              <a href={`mailto:${item.url}`} className='text-white hover:text-gray-300'>
                {item.text}
              </a>
            </Flex>
          ) : (
            <Flex>
              <a href={item.url} className='text-white hover:text-gray-300'>
                {item.text}
              </a>
            </Flex>
          )}
        </List.Item>
      )}
    />
  )
}

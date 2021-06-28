import { FC } from 'react'
import { Collapse } from 'antd'
import TypeChooser from './TypeChooser'
import SearchTags from './SearchTags'

const { Panel } = Collapse


export interface FiltersProps {
  showFilters: string
}

const SearchFilters: FC<FiltersProps> = (props) => (
  <Collapse
    className="no-pad-collapse"
    expandIcon={(_) => null}
    expandIconPosition="right"
    ghost
    activeKey={props.showFilters}
  >
    <Panel
      header={null}
      key="1"
    >
      <TypeChooser/>

      <SearchTags/>
    </Panel>
  </Collapse>
)


export default SearchFilters
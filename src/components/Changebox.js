import React from 'react'
import ColumnNames from './column-names'
import DropdownMenu from './dropdown-menu'
import Table from './table'

const Changebox = ({ option }) => {
  return (
    <div>
      <DropdownMenu option={option} />
      <ColumnNames option={option} />
      <Table option={option} />
    </div>
  )
}

export default Changebox;
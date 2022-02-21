import React, { useMemo, useCallback, useState } from 'react'
import Directory from './Directory'
import Item from './Item'
import TreeProps from '../types/TreeProps'

const isEmptyElement = (element: any[]) => !!element.length
export default function Tree({ menu }: TreeProps) {
  return (
    <ul className="menu bg-default text-content-700 ml-2 mb-0 mt-0 p-2 pt-0 pb-0">
      {menu.children &&
        menu.children.map((item, index) => {
          if (item.children && isEmptyElement(item.children)) {
            return <Directory key={item.title} item={item} />
          } else {
            return (
              <Item key={item.title}>
                <span className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300">
                  {item.title}
                </span>
              </Item>
            )
          }
        })}
    </ul>
  )
}

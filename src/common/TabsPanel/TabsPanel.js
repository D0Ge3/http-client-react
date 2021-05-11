import * as cs from 'classnames'
import s from './TabsPanel.module.scss'

export const TabsPanel = ({ activeTab, tabs, changeTab, className }) => {
  const tabStyle = (isActive) =>
    cs({
      [s.tab]: true,
      [s.tab_active]: isActive,
      [className]: className,
    })
  return (
    <div className={s.tabPanel}>
      {tabs.map((tab, index) => (
        <div
          key={tab}
          onClick={() => changeTab(index)}
          className={tabStyle(index === activeTab)}
        >
          <span>{tab}</span>
        </div>
      ))}
    </div>
  )
}

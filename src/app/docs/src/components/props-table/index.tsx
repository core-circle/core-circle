import { PropsTableProps } from '../../interface/components/props-table.types';
import { propsTableStyles as s } from './props-table.styles';

const PropsTable = ({ data, propsData }: PropsTableProps) => {
  const tableData = data || propsData || [];
  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr className={s.thead.row}>
            <th className={`${s.thead.th} w-1/5`}>Prop</th>
            <th className={`${s.thead.th} w-1/4`}>Type</th>
            <th className={`${s.thead.th} w-1/6`}>Default</th>
            <th className={s.thead.th}>Description</th>
          </tr>
        </thead>
        <tbody className={s.tbody.base}>
          {tableData.map((prop) => (
            <tr key={prop.name} className={s.tbody.row}>
              <td className={s.tbody.cell}>
                <div className={s.prop.wrapper}>
                  <code className={s.prop.code}>
                    {prop.name}
                  </code>
                  {prop.required && (
                    <span className={s.prop.required}>
                      Required
                    </span>
                  )}
                </div>
              </td>
              <td className={s.tbody.cell}>
                <code className={s.type.code}>
                  {prop.type}
                </code>
              </td>
              <td className={s.defaultValue.cell}>
                {prop.defaultValue ? (
                  <code className={s.defaultValue.code}>
                    {prop.defaultValue}
                  </code>
                ) : (
                  <span className={s.defaultValue.empty}>—</span>
                )}
              </td>
              <td className={s.description.cell}>
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;

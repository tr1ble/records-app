import React, {ReactNode, useState} from 'react';
import classNames from 'classnames/bind';
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook
} from 'react-redux'
import { selectRecords, addRecord, removeRecord, updateRecord } from '../../store/record/recordSilce';
import { RootState } from '../../store';
import { Table } from '../../components/table';

import styles from './recordPage.scss';
import RecordForm from "../../components/forms/recordForm";

const cx = classNames.bind(styles);

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const RecordPage = () => {
  const dispatch = useDispatch();

  const [currentForm, setCurrentForm] = useState<ReactNode | null>(null);

  const onAddHandle = () => {
    if(currentForm) {
      return;
    }
    setCurrentForm(
        <RecordForm onSubmit={(record) => {
          dispatch(addRecord({...record, date: new Date().toDateString() }))
          setCurrentForm(null)
    }} action={'Add'} />
    );
  }

  const onUpdateHandle = (recordUpdate: IRecord) => {
    if(currentForm) {
      return;
    }
    setCurrentForm(<RecordForm onSubmit={(record) => {
      dispatch(updateRecord({ record, number: recordUpdate.id }));
      setCurrentForm(null);
    }} action={'Update'} initialData={recordUpdate} />);
  }

  const onDeleteHandle = (number: number) => {
    dispatch(removeRecord(number));
  }

  const onAdd: Action = { name: 'Add', onHandle: onAddHandle };
  const onRemove: Action = { name: 'Remove', onHandle: onDeleteHandle };
  const onUpdate: Action = { name: 'Update', onHandle: onUpdateHandle };

  const actions:Action[] = [onAdd, onRemove, onUpdate];

  const records = useTypedSelector(selectRecords);

  return (
      <div className={cx('record-page')}>
        <h1 className={cx('record-page-title')}>TO-DO table</h1>
        <Table data={records} columns={[ 'Description', 'Date']} actions={actions}/>
        {currentForm}
      </div>
  )
};

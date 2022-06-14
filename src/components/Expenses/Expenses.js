import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import React from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = React.useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((el) => (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

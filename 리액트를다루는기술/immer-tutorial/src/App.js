import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // setForm({
    //     ...form,
    //     [name]: [value],
    // });
    setForm(
      produce((draft) => {
        draft[name] = value;
      }),
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // setData({
      //     ...data,
      //     array: data.array.concat(info),
      // });
      setData(
        produce((draft) => {
          draft.array.push(info);
        }),
      );

      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [form.name, form.username],
  );

  const onRemove = useCallback((id) => {
    // 이 케이스는 사용안하는게 나음
    // setData({
    //     ...data,
    //     array: data.array.filter((info) => info.id !== id),
    // });
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id !== id),
          1,
        );
      }),
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="ID"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

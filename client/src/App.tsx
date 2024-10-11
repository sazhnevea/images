/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import './App.css'
function App() {
  const [csvFile, setCsvFile] = useState(null);
  const [csvContent, setCsvContent] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileSelect = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        setCsvFile(file);
        const reader = new FileReader();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        reader.onload = (event: any) => {
          setCsvContent(event.target.result);
        };
        reader.readAsText(file);
      }
    };

  const onSendHandler = async () => {
    if (csvFile) {
      const formData = new FormData();
      formData.append('file', csvFile);

      try {
        const response = await fetch('http://localhost:3000/csv', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Файл успешно отправлен');
          const data = await response.json()
          console.log('data', data)
        } else {
          console.error('Ошибка при отправке файла');
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    } else {
      console.error('Пожалуйста, выберите файл');
    }
  };

  return (
    <>
      <div>
        <label htmlFor='csvPath'>Выберите CSV файл</label>
        <input
          id='csvPath'
          type="file"
          onChange={handleFileSelect}
        />
        {/* {csvFile && (
          <div>
            <h3>Выбранный файл:</h3>
            <p>{csvFile}</p>
          </div>
        )} */}
        <button onClick={onSendHandler}>Отправить файл</button>
      </div>
    </>
  );
}

export default App;



    //   const response = await fetch('http://localhost:3000/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ csvFile: directoryHandle.name }),
    //   });

    //   if (response.ok) {
    //     console.log('Путь к папке успешно отправлен на сервер');
    //   }
    // } catch (err) {
    //   console.error('Ошибка при выборе папки:', err);
    // }
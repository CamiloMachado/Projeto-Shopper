import { useState } from 'react';

const TravelHistoryFilter = ({ onApplyFilter }: { onApplyFilter: (driverId: string) => void }) => {
  const [driverId, setDriverId] = useState('');

  const handleApply = () => {
    onApplyFilter(driverId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ID do Motorista"
        value={driverId}
        onChange={(e) => setDriverId(e.target.value)}
      />
      <button onClick={handleApply}>Aplicar Filtro</button>
    </div>
  );
};

export default TravelHistoryFilter;
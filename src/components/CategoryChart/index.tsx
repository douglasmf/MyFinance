import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useAppSelector } from '../../store/hooks';
import { selectAllTransactions } from '../../store/selectors/financeSelectors';
import { theme } from '../../themes/theme';
import * as S from './styles';

export const CategoryChart = () => {
  const transactions = useAppSelector(selectAllTransactions);

  const data = transactions
    .filter(t => t.type === 'saida')
    .reduce((acc, t) => {
      const found = acc.find(item => item.name === t.category);
      if (found) {
        found.value += t.amount;
      } else {
        acc.push({ name: t.category, value: t.amount });
      }
      return acc;
    }, [] as { name: string; value: number }[]);

  // Cores para as fatias do gráfico
  const COLORS = [theme.colors.primary, '#8884d8', '#82ca9d', '#ffc658', '#f44336'];
    console.log("Dados do gráfico:", data);
  return (
    <S.Container>
      <h2>Gastos por Categoria</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            isAnimationActive={true} // Ativa a animação
            animationBegin={200}     // Atrasa um pouco para começar após o layout carregar
            animationDuration={1200} 
            cx="50%"
            cy="50%"
            innerRadius={60} 
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: theme.colors.shape, border: 'none', borderRadius: '8px' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </S.Container>
  );
};
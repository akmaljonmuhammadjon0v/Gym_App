import { ITask } from '@/types';
import { Edit2, Trash } from 'lucide-react';
import { CiPlay1 } from 'react-icons/ci';
import { HiStatusOnline } from 'react-icons/hi';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface Props {
	task: ITask;
	onStartEditing: () => void;
	onDelete: () => void;
}

function TaskItem({ task, onStartEditing, onDelete }: Props) {
	return (
		<Card className='w-full p-4 shadow-md border grid grid-cols-4 items-center relative'>
			<div className='flex gap-1 items-center col-span-2 w-full'>
				<MdOutlineTaskAlt className='text-blue-500' />
				<span className='capitalize'>{task.title}</span>
			</div>
			<div className='flex gap-1 items-center '>
				<HiStatusOnline />
				<span className='capitalize text-sm'>{task.status}</span>
			</div>
			<div className='flex gap-1 items-center justify-self-auto'>
				<Button variant={'ghost'} size={'icon'} className='w-8 h-8'>
					<CiPlay1 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button
					variant={'secondary'}
					size={'icon'}
					className='w-8 h-8'
					onClick={onStartEditing}
				>
					<Edit2 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button
					variant={'destructive'}
					size={'icon'}
					className='w-8 h-8'
					onClick={onDelete}
				>
					<Trash className='w-5 h-5 text-indigo-500' />
				</Button>
			</div>
		</Card>
	);
}

export default TaskItem;

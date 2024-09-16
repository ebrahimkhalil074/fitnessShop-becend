
import { model, Schema } from 'mongoose';
import { TSlot } from './slot.interface';

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Services',
      required: true,
     
    },
    date: {
      type: String,
      required: true,
    },
    startTime:{
      type: String,
      required: true,
    },
    endTime:{
      type: String,
      required: true,
    },
    isBooked:{
      type: String,
      enum: ['available', 'booked', 'canceled'],
      default: 'available',
    }
  },
  {
    timestamps: true,
  },
);

// academicDepartmentSchema.pre('save', async function (next) {
//   const isDepartmentExist = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This department is already exist!',
//     );
//   }

//   next();
// });

// academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
//   const query = this.getQuery();
//   const isDepartmentExist = await AcademicDepartment.findOne(query);

//   if (!isDepartmentExist) {
//     throw new AppError(
//       httpStatus.NOT_FOUND,
//       'This department does not exist! ',
//     );
//   }

//   next();
// });

export const Slot = model<TSlot>(
  'Slot',
  slotSchema,
);

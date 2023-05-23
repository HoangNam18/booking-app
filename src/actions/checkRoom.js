//Check available room
export const checkRoom = (
    {
        location = '',
        checkIn =  '',
        checkOut = '',
        rooms = 0,
        adults =  1,
        children = 0
    } = {}
) => (
    {
        type: 'CHECK_ROOM',
        rooms: {
            location: '',
            checkIn: '',
            checkOut: '',
            rooms: 0,
            adults: 1,
            children:0
        }
    }   
); 
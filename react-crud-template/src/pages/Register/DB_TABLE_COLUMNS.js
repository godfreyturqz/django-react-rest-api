// Change to match your Database Model
// 'title' - Column head title
// 'jsonKey' - key you want to access from HTTP response
export const DB_TABLE_COLUMNS = [
    { title: 'ID', jsonKey: 'id'},
    { title: 'Name', jsonKey: 'name'},
    { title: 'Contact', jsonKey: 'contact'},
    { title: 'Date', jsonKey: 'created_at'},
    { title: 'edit', note: 'Table head space for edit button. Don\'t delete this line.'},
    { title: 'delete', note: 'Table head space for delete button. Don\'t delete this line.'}
]
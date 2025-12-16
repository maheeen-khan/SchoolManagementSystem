import React, { useState } from "react";
import Cards from '../../componenets/Cards/Cards'
import AddStudent from '../../assets/AddStudent.png'
import DeleteStudent from '../../assets/DeleteStudent.png'
import UpdateStudent from '../../assets/UpdateStudent.png'
import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'
import Modal from '../../componenets/Modal(Popup_Window)/Modal'
import addStudent from '../../API call/StudentAPI.jsx'
import { toast } from "react-toastify";

const students = [
  { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
  { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
  { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
];

function Student() {

  const [activeModal, setActiveModal] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    Class: '',
    Address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(formData);
    setActiveModal(null);

  };

  // here handleDelete and handleUpdate functions can be implemented similarly only 2nd line will change according to API used and this functions defined in StudentAPI file

  // in modal, there would be "name", value, onChange field 

  return (
    <div>
      <h1 className='main-title mt-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person-arms-up me-3" viewBox="0 0 16 16">
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
        </svg>
        Student</h1>
      <div className="cards d-flex 
                justify-content-center justify-content-md-start 
                flex-wrap text-center">
        <Cards heading="Add Student" value="" photo={AddStudent} colour="#38abb869" onClick={() => setActiveModal("add")} />
        <Modal
          show={activeModal === "add"}
          onClose={() => setActiveModal(null)}
          title="Add Student"
          footer={
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                form="addStudentForm"
              >
                Submit
              </button>
            </>
          }
        >
          {/* Body content injected here */}
          <form onSubmit={handleSubmit} id="addStudentForm">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input
                className="form-control"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Class</label>
              <input
                className="form-control"
                name="Class"
                value={formData.Class}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                className="form-control"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
              />
            </div>

          </form>

        </Modal>
        <Cards heading="Delete Student" value="" photo={DeleteStudent} colour="#38abb869" onClick={() => setActiveModal("delete")} />
        <Modal
          show={activeModal === "delete"}
          onClose={() => setActiveModal(null)}
          title="Delete Student"
          footer={
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Delete
              </button>
            </>
          }
        >
          {/* Body content injected here */}
          <form>
            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input className="form-control" />
            </div>
          </form>
        </Modal>
        <Cards heading="Update Student Data" value="" photo={UpdateStudent} colour="#38abb869" onClick={() => setActiveModal("update")} />
        <Modal
          show={activeModal === "update"}
          onClose={() => setActiveModal(null)}
          title="Update Student Data"
          footer={
            <>
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Submit
              </button>
            </>
          }
        >
          {/* Body content injected here */}
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Guardian's Name</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Guardian's No</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Guardian's Designation</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Class</label>
              <input className="form-control" />
            </div>

          </form>
        </Modal>
      </div>
      <h1 className='main-title' style={{ paddingTop: "50px" }}>Students Data</h1>
      <StudentDataTable data={students} />
    </div>
  )
}

export default Student

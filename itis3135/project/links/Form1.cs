using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

/*
 * scenario: in this program, we are to create an interactive GUI app that allows Cindy's Catering to operate their business.
 * to be successful in this assignment, we must have the following criteria.
 * Critera: customer's name must be entered in text field
 * customer's phone number must be entered in text field
 * number of guests must be entered in text field
 * customer must choose 2 side dishes from a group of atleast four choices
 * lastly, customer must choose one dessert from a group of atleast three choices
 * 
 * we must also validate if the number of guests entered is not generic and if customer chooses more than two side dishes, then we need
 * to remove all current selections and have customer start all over.
 * 
 * we must be also write all the data entered by a customer to a text file named 'Event'.
 * date: 11/06/2021
 * loi a
 */

namespace myCatering
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // for our design part, we need to initialize the components
            // add items for side dishes and and dessert using comboboxes

            // this option here is for our entree
            comboBox1.Items.Add("Chicken Kebabs");
            comboBox1.Items.Add("Grilled Chicken Sandwich");
            comboBox1.Items.Add("Sour Salmon and Rice");
            comboBox1.Items.Add("Garlic Beef Noodles");

            // this option here is four dessert
            comboBox2.Items.Add("Roasted Sweet Potatoes");
            comboBox2.Items.Add("Fudge Ice Cream");
            comboBox2.Items.Add("Chocolate Cheese Cake");
        }
        private void button1_Click(object sender, EventArgs e)
        {
            // in this method, we to hold our customer name, phone and number of guests
            String customerName = textBox1.Text;
            String phoneNumber = textBox2.Text;
            int numberOfGuests;
            string myEntree;
            string myDessert;
            try
            {
                numberOfGuests  = Convert.ToInt16(textBox3.Text);
            }
            catch
            {
                numberOfGuests = 0;
            }
            //here, we need to keep update of our count
            int myCount = 0;
            foreach (Control count in this.Controls)
                if (count is CheckBox)
                    if (((CheckBox)count).Checked)
                        myCount++;


            string mySideDishes = " ";

            if (myCount == 3 || myCount == 4)
            {
                checkBox5.Checked = false;
                checkBox6.Checked = false;
                checkBox7.Checked = false;
                checkBox8.Checked = false;
            }
            // if any of the four is selected
            else
            {
                if (checkBox5.Checked == true)
                {
                    mySideDishes = mySideDishes + " Soup ";
                }
                if (checkBox6.Checked == true)
                {
                    mySideDishes = mySideDishes + " Wine ";
                }
                if (checkBox7.Checked == true)
                {
                    mySideDishes = mySideDishes + " Salad ";
                }
                if (checkBox8.Checked == true)
                {
                    mySideDishes = mySideDishes + " Brocoli ";
                }

            }

            // here, we need to check if none of the item is selected
            try
            {

                myEntree = comboBox1.SelectedItem.ToString();
                myDessert = comboBox2.SelectedItem.ToString();
            }
            
            catch
            {
                myEntree = "none";
                myDessert = "none";
            }

            // the cost per persson is 35 dollars
            double myCost = numberOfGuests * 35;
            MessageBox.Show("The  total cost is: $" + myCost);// calculate the total cost
            //Here, we need to write our data a text file called Event
            String myData = customerName + ", " + phoneNumber + ", " + numberOfGuests + ", " + myEntree + ", " + mySideDishes + ", " + myDessert;
            File.WriteAllText(@"Event.txt", myData);
        }

    }
}


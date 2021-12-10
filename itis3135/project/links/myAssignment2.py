#!/usr/bin/python
from mininet.topo import Topo
from mininet.net import Mininet
from mininet.node import Controller, RemoteController, OVSController
from mininet.node import CPULimitedHost, Host, Node
from mininet.node import OVSKernelSwitch, UserSwitch
from mininet.node import IVSSwitch
from mininet.cli import CLI
from mininet.log import setLogLevel, info
from mininet.link import TCLink, Intf
from subprocess import call
from mininet.util import dumpNodeConnections

class myTopology(Topo):
	def __init__(self):

		Topo.__init__(self)

    		info( '*** Adding controller\n' )
    		info( '*** Add switches\n')
    		s10 = self.addSwitch('s10', cls=OVSKernelSwitch)
    		s15 = self.addSwitch('s15', cls=OVSKernelSwitch)
    		s13 = self.addSwitch('s13', cls=OVSKernelSwitch)
    		s11 = self.addSwitch('s11', cls=OVSKernelSwitch)
    		s9 = self.addSwitch('s9', cls=OVSKernelSwitch)
    		s12 = self.addSwitch('s12', cls=OVSKernelSwitch)
    		s14 = self.addSwitch('s14', cls=OVSKernelSwitch)

    		info( '*** Add hosts\n')
    		h1 = self.addHost('h1', cls=Host, ip='10.0.1.10/24', defaultRoute=None)
    		h3 = self.addHost('h3', cls=Host, ip='10.0.1.12/24', defaultRoute=None)
    		h5 = self.addHost('h5', cls=Host, ip='10.0.2.10/24', defaultRoute=None)
    		h7 = self.addHost('h7', cls=Host, ip='10.0.2.12/24', defaultRoute=None)
    		h6 = self.addHost('h6', cls=Host, ip='10.0.2.11/24', defaultRoute=None)
    		h4 = self.addHost('h4', cls=Host, ip='10.0.1.13/24', defaultRoute=None)
    		h8 = self.addHost('h8', cls=Host, ip='10.0.2.13/24', defaultRoute=None)
    		h9 = self.addHost('h9', cls=Host, ip='10.0.1.1/24', defaultRoute=None)
    		h2 = self.addHost('h2', cls=Host, ip='10.0.1.11/24', defaultRoute=None)
    		h10 = self.addHost('h10', cls=Host, ip='10.0.2.1/24', defaultRoute=None)

    		info( '*** Add links\n')
    		self.addLink(s9, s13,cls=TCLink,bw=20)
    		self.addLink(h9, s9)
    		self.addLink(h10, s9)
    		self.addLink(s11, h1)
    		self.addLink(s11, h2)
    		self.addLink(s12, h3)
    		self.addLink(s12, h4)
    		self.addLink(s11, s10)
    		self.addLink(s10, s12)
    		self.addLink(s14, h5)
    		self.addLink(s14, h6)
    		self.addLink(s13, s14,cls=TCLink,bw=20,delay='5ms')
    		self.addLink(s13, s15)
    		self.addLink(s15, h7)
    		self.addLink(s15, h8)
    		self.addLink(s10, s9)

def myNetwork():
	topo=myTopology()
	net = Mininet(topo)
	net.start()
	dumpNodeConnections(net.hosts)
	net.pingAll()
	net.stop()

if __name__ == '__main__':
    setLogLevel( 'info' )
    myNetwork()
topos = {'topology':(lambda:myTopology())}






